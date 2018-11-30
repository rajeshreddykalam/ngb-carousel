FROM nginx:alpine
LABEL AUTHOR="Rajesh Reddy"
COPY ./dist/ngb-carousel /usr/share/nginx/html
# COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# To delete all containers including its volumes use,
# docker rm -vf $(docker ps -a -q)

# To delete all the images,
# docker rmi -f $(docker images -a -q)

# Remember, you should remove all the containers before removing all the images from which those containers were created.