#Use to create local host
import http.server
import socketserver

PORT = 8080

Handler = http.server.SimpleHTTPRequestHandler
Handler.extensions_map.update({
		".js": "application/javascript",
})

httpd = socketserver.TCPServer(("", PORT), Handler)
print ("Serving at port", PORT)

httpd.serve_forever()