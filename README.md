cypher2ldap
===========

Experimenting with fronting Neo4J with an LDAP interface using node.js.

###NOTHING TO SEE HERE
This is all pie in sky at this point - exploration only.

What happens if we wrap the [neo4j](http://neo4j.com/) [rest interface](https://www.npmjs.com/package/neo4j) with [ldapjs](http://ldapjs.org/)..?

Also interested in how [cypher-stream](https://github.com/brian-gates/cypher-stream) fits here.

```sh
$ git clone https://github.com/momiller121/cypher2ldap.git
```
```sh
cd cypher2ldap
```
```sh
$ npm install
$ npm start
```
Nothing but the 'hello world' for ldapjs yet...
```sh
$ ldapsearch -H ldap://localhost:1389 -x -b o=example objectclass=*
```
<div># extended LDIF<br/>
#<br/>
# LDAPv3<br/>
# base <o=example> with scope subtree<br/>
# filter: objectclass=*<br/>
# requesting: ALL<br/>
#<br/>
<br/>
# example<br/>
dn: o=example<br/>
objectclass: organization<br/>
objectclass: top<br/>
o: example<br/>
<br/>
# search result<br/>
search: 2<br/>
result: 0 Success<br/>
<br/>
# numResponses: 2<br/>
# numEntries: 1<br/>
</div>