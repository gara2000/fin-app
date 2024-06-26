FROM node:20

WORKDIR /app

COPY ./package*.json ./

RUN npm install -g @angular/cli
RUN npm install -g @aws-amplify/cli
RUN npm install 

COPY . .

# Define the build arguments
ARG AMPLIFY
ARG FRONTEND
ARG PROVIDERS
# Pull Amplify Backend
RUN amplify pull --amplify ${AMPLIFY} --frontend ${FRONTEND} --providers ${PROVIDERS} --yes

RUN ng build --prod

# Use Nginx lightweight server
FROM nginx:alpine

# Copy built Angular app from previous stage to Nginx
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]