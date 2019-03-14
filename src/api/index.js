let baseUrl = ''

process.env.NODE_ENV === 'development' ? baseUrl = '' : baseUrl = 'http://39.106.111.98'

export default baseUrl