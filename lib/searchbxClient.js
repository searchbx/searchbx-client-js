import axios from 'axios';

const supportedVersions = ['basic', 'advanced'];

export default function SearchbxClient({url, version}) {
  if (this instanceof SearchbxClient) {
    return SearchbxClient({
      url,
      version
    });
  }
  if (!url) {
    throw new Error('SearchbxClient Config Missing: requires the "url" registered in Searchbx');
  }
  if (!version) {
    throw new Error('SearchbxClient Config Missing: requires a "version" like "basic"');
  }
  if (!supportedVersions.includes(version)) {
    throw new Error('SearchbxClient Config Invalid: does not support the supplied version');
  }

  return {
    search: function(options = {}) {
      if (typeof options.query === 'undefined') {
        return Promise.reject(
          new Error('Searchbx Options Missing: requires "query"')
        );
      }
      let query = options.query
      let limit = 10
      let from = 0
      if (typeof options.limit !== 'undefined') {
        limit = options.limit
      }
      if (typeof options.from !== 'undefined') {
        from = options.from
      }
      return axios({
        method: 'post',
        url: `https://us-1.searchbx.com/1/indexes/${url}/${version}`,
        data: {
          query: query,
          size: limit,
          from: from
        }
      }).then((res) => {
        return res.data
      }).catch((err) => {
        throw err;
      });
    }
  }
}