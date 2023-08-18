npm install
npm run swagger-autogen
node server.js

docker login registry.redhat.io
docker build -t nodejs:0.1 .
docker tag nodejs:0.1 quay.io/msentissi/nodejs:0.1
docker push quay.io/msentissi/nodejs:0.1