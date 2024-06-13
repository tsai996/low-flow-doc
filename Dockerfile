# production environment
FROM nginx:1.25.0-alpine
# FROM georgjung/nginx-brotli:1.25-alpine
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && \
    echo 'Asia/Shanghai' >/etc/timezone
COPY /docs/.vitepress/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./conf/nginx.conf /etc/nginx/
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
