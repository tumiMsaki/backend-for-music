const searchMusic = async ctx  => {
  ctx.body = {
    code: 200,
    msg: 'searchMusic'
  }
}

const musicCollection = async ctx => {
  ctx.body = {
    code: 200,
    msg: 'collectionList'
  }
}

const addFavorites = async ctx => {
  ctx.body = {
    code: 200,
    msg: 'addMusci'
  }
}

export {
  searchMusic,
  musicCollection,
  addFavorites
}