
To run verdaccio in Docker:
docker run -it --rm --name verdaccio -p 4873:4873 verdaccio/verdaccio

To create a user in verdaccio:
npm adduser --registry http://localhost:4873

To publish a package in verdaccio
npm publish --registry http://localhost:4873

To install a package from verdaccio:
npm install local-verdaccio-package-name --registry=http://localhost:4873