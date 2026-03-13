#!/usr/bin/env python3
"""
Premium Landscapes - Development Server
Static file server with custom 404, cache headers, and WebP support
"""
import os
from http.server import HTTPServer, SimpleHTTPRequestHandler

class PremiumLandscapesHandler(SimpleHTTPRequestHandler):

    def send_error(self, code, message=None, explain=None):
        if code == 404:
            try:
                with open('404.html', 'rb') as f:
                    content = f.read()
                self.send_response(404)
                self.send_header('Content-Type', 'text/html; charset=utf-8')
                self.send_header('Content-Length', str(len(content)))
                self.end_headers()
                self.wfile.write(content)
            except FileNotFoundError:
                super().send_error(code, message, explain)
        else:
            super().send_error(code, message, explain)

    def end_headers(self):
        path = self.path.split('?')[0]
        # Cache static assets aggressively, bust HTML on every request
        if path.endswith(('.webp', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico')):
            self.send_header('Cache-Control', 'public, max-age=86400')
        elif path.endswith(('.css', '.js')):
            self.send_header('Cache-Control', 'public, max-age=3600')
        else:
            self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
            self.send_header('Pragma', 'no-cache')
            self.send_header('Expires', '0')
        super().end_headers()

    def guess_type(self, path):
        if str(path).endswith('.webp'):
            return 'image/webp'
        return super().guess_type(path)

    def log_message(self, format, *args):
        # Suppress routine 200/304 image requests to reduce noise
        if args and str(args[1]) in ('200', '304') and any(
            str(args[0]).endswith(ext) for ext in ('.webp', '.png', '.jpg', '.css', '.js', '.ico')
        ):
            return
        super().log_message(format, *args)

if __name__ == '__main__':
    PORT = 5000
    server = HTTPServer(('0.0.0.0', PORT), PremiumLandscapesHandler)
    print(f'🚀 Premium Landscapes running on port {PORT}')
    server.serve_forever()
