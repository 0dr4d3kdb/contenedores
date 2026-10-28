FROM alpine:3.19
RUN apk add apache2
COPY index.html /var/www/localhost/htdocs/
EXPOSE 80
CMD ["httpd", "-D", "FOREGROUND"]
