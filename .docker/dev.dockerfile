FROM nginx:alpine
LABEL AUTHOR="Rajesh Reddy"
COPY ./dist/ngb-carousel /usr/share/nginx/html
# COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80