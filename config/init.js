// insert your port

const port = 3000;

// Insert your mongodb details here
const username = 'shyuuun' // 'YOUR USERNAME'
const pass = 'frederick09' // 'YOUR PASSWORD'
const uri = `mongodb+srv://${username}:${pass}@kokutaro-cluster.s3lmuvf.mongodb.net/todo?retryWrites=true&w=majority`;

module.exports = {
    port,
    username,
    pass,
    uri
};