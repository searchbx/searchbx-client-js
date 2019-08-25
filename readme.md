## Searchbx API Client 

Add Custom Search to your Website & help visitors find the right page. [Demo Online](https://h.searchbx.com/blog.digitalocean.com)

### Simple Setup
You can add a simple search box to your blog, static site, documentation site, or help desk page without complex codes.

### Managed Service
We run the crawlers and search servers for you. You do not need to manage and synchronize with expensive search databases such as Elasticsearch.

### Full Text Search
Instead of searching only the page titles, we support searching the whole article, with typo tolerance.

### How to use Searchbx API Client 
- Import the library
```javascript
import SearchbxClient from 'searchbx';
```

- Create SearchbxClient
```javascript
const searchbxClient = new SearchbxClient({
 url: 'YourSiteURL',
 version: 'basic'
});
```

- Start searching
```javascript
searchbxClient.search({
 query: 'foo',
 limit: 20,
 from: 0
}).then((res) => {
 ...
})
```
