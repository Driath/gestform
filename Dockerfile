# Stage build
FROM node:alpine as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage run
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/gestform /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]