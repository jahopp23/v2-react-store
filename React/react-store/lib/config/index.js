const config = {
    app: {
      port: process.env.PORT || 5000
    },
    bucket : {
      slug: process.env.SLUG || 'react-bootstrap-store',
      write_key: process.env.WRITE_KEY ||'VOfDvHy2wt6EFYrVKOH63Nb8xzY70GTQTd2i3DckwdDIZRTow7',
      read_key: process.env.READ_KEY ||'MjnsGWQ5ftwhaUJkljIP0D8yd888pq3soWDhhT4XYgBBarVq5P'
    }
  }
  
  module.exports = config;