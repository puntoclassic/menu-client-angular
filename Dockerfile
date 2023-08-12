FROM "node" as builder
WORKDIR /var/www/frontend
COPY ./ ./
RUN npm install
RUN npm run build

FROM nginx
COPY --from=builder /var/www/frontend/dist/frontend-angular/browser /usr/share/nginx/html
EXPOSE 80
