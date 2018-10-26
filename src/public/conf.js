let HOST = 'https://staging-theta.jd.com/hollow'
const PRO_HOST = ''
if(process.env.NODE_ENV === 'development') {
  HOST = 'http://dev.sop-gateway.jd.com/hollow'
} else if(process.env.NODE_ENV === 'staging') {
  HOST = 'http://staging.sop-gateway.jd.com/hollow'
} else {
  HOST = 'https://theta.jd.com/hollow'
}

export {
  HOST,
  PRO_HOST,
}
