FROM node:lts-alpine
RUN npm install -g http-server
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN apk add --no-cache openssl
RUN openssl req -new -newkey rsa:2048 -days 365 -nodes -x509 \
  -subj "/C=ES/ST=La Rioja/L=Logronio/O=Lagatrix/CN=lagatrix.com" \
  -keyout /etc/ssl/private/key.key -out /etc/ssl/certs/cert.cert
EXPOSE 7443
CMD [ "http-server", "-P", "https://localhost:7443?", "-S", "-C", "/etc/ssl/certs/cert.cert", "-K", "/etc/ssl/private/key.key", "-p", "7443", "dist" ]