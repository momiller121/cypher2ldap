var ldap = require('ldapjs');
var server = ldap.createServer();

var cypher = require('cypher-stream')('http://localhost:7474');

server.search('o=example', function (req, res, next) {
    var obj = {
        dn: req.dn.toString(),
        attributes: {
            objectclass: ['organization', 'top'],
            o: 'example'
        }
    };

    cypher('MATCH (n) RETURN n')
        .on('data', function (result) {
            console.log(result);
            if (req.filter.matches(obj.attributes))
                obj.attributes.givenName = result.n.name; // <-- Graph data onto the LDAP entry
            res.send(obj);
            res.end();
        })
        .on('error', function (error) {
            console.log(error);
        })
        .on('end', function () {
            console.log('all done');
        });
});

server.listen(1389, function () {
    console.log('LDAP server listening at %s', server.url);
});