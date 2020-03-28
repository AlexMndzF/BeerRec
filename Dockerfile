# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /app 

COPY . ./ 

# add `/app/node_modules/.bin` to $PATH
EXPOSE 3000
# install and cache app dependencies
RUN npm install 
RUN npm install react-scripts@3.0.1

# start app
CMD ["npm", "start"]