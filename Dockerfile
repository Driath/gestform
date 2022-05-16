# Stage build
FROM node:alpine as build
WORKDIR /app
COPY . .


RUN apk add python3 make g++
RUN npm install

# not working :( TODO: make it work later maybe found a solution from an image from ubuntu instead of minimalist alpine image
# RUN apk add   chromium dbus chromium-chromedriver
#ENV CHROME_BIN=/usr/bin/chromium-browser
#RUN npx ng test --browsers=Headless_Chrome

RUN npm run lint
RUN npm run build

# Stage run
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/gestform /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]