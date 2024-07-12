# Use the official nginx image as the base
FROM nginx:alpine

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Remove the default nginx static assets
RUN rm -rf ./*

# Copy the static content (HTML, CSS, JS, etc.) from your dist folder to the container
COPY ./dist .

# Expose port 80 to the outside once the container has launched
EXPOSE 80

# Start nginx and keep it running in the foreground
CMD ["nginx", "-g", "daemon off;"]