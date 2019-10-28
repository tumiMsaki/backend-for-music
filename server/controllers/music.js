const searchMusic = async ctx  => {
  ctx.body = {
    code: 200,
    msg: 'searchMusic'
  }
}

const musicCollection = async ctx => {

}

const addFavorites = async ctx => {

}

export {
  searchMusic,
  musicCollection,
  addFavorites
}