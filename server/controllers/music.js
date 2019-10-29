import * as userModel from '../../init/util/mysql'
import uuid from 'node-uuid'
const searchMusic = async ctx  => {
  let { name } = ctx.request.body
  await userModel.searchMusic(name)
    .then(result => {
      if (result[0]) {
        let data = result[0]
        ctx.body = {
          code: 200,
          msg: 'success',
          data: {
            music_name: data.music_name,
            music_author: data.music_author,
            music_src: data.music_src
          }
        }
      } else {
        ctx.body = {
          code: 200,
          msg: '没有找到这个歌'
        }
      }
    }).catch(err => {
      console.log(err)
    })
}

const searchAuthor = async ctx => {
  let { name } = ctx.request.body
  await userModel.searchAuthor(name)
    .then(result => {
      if (result[0]) {
        ctx.body = {
          code: 200,
          data: [
            ...result
          ]
        }
      } else {
        ctx.body = {
          code: 200,
          msg: '没有找到'
        }
      }
    })
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

const addMusic = async ctx => {
  let { name, author, url } = ctx.request.body
  await userModel.addMusic([uuid.v4(), name, author, url])
    .then(result => {
      ctx.body = {
        code: 200,
        msg: '添加成功'
      }
    }).catch(err => {
      ctx.body = {
        code: 500,
        msg: '服务器炸了'
      }
    })
}

export {
  searchMusic,
  musicCollection,
  addFavorites,
  searchAuthor,
  addMusic
}