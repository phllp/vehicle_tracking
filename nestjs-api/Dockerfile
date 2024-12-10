FROM node:22.8-slim

RUN apt update && apt install openssl procps -y

USER node

WORKDIR /home/node/app

CMD ["tail", "-f", "/dev/null"]



