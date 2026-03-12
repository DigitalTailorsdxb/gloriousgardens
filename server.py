#!/usr/bin/env python3
"""
Premium Landscapes - Development Server
Simple static file server with no-cache headers
"""
from http.server import HTTPServer, SimpleHTTPRequestHandler

class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

if __name__ == '__main__':
    PORT = 5000
    server = HTTPServer(('0.0.0.0', PORT), NoCacheHandler)
    print(f'🚀 Premium Landscapes running on port {PORT}')
    server.serve_forever()
