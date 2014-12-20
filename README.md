cypher2ldap
===========

Experimenting with fronting Neo4J with an LDAP interface using node.js.

###NOT MUCH TO SEE HERE YET
This is all pie in sky at this point - exploration only.

What happens if we wrap [neo4j-community-2.1.6](http://neo4j.com/) with [ldapjs](http://ldapjs.org/) via
 [cypher-stream](https://github.com/brian-gates/cypher-stream)?

The following assumes that you have neo4j-community-2.1.6 running and one node with a :name attribute.

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
Nothing but the helloworld for ldapjs wrapped around helloworld for cypher-stream yet...
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
givenName: Mark <--THIS originates from the cypher query<br/>
<br/>
# search result<br/>
search: 2<br/>
result: 0 Success<br/>
<br/>
# numResponses: 2<br/>
# numEntries: 1<br/>
</div>