import * as userModel from '../../init/util/mysql'
import Cookie from '../utils/session'
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
            music_id: data.id,
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
  const user_id = await Cookie.getRedisClient(ctx)
  const { music_id } = ctx.request.body
  await userModel.searchCollectionMusic({user_id, music_id})
    .then(async result => {
      if (result[0]) {
        ctx.body = {
          code: 4,
          msg: '此歌曲已被收藏过啦～'
        }
      } else {
        await userModel.searchMusicById(music_id)
        .then(async result => {
          if (result[0]) {
            await userModel.musicCollection([user_id, music_id])
            .then(result => {
              ctx.body = {
                code: 200,
                msg: '收藏成功'
              }
            })
            .catch(err => {
              ctx.body = {
                code: 500,
                msg: '服务器炸了～'
              }
            }) 
          } else {
            ctx.body = {
              code: 200,
              msg: '没有找到这首歌噢～'
            }
          }
        })
        .catch(err => {
          ctx.body = {
            code: 500,
            msg: '服务器炸了～'
          }
        })
      }
    }) 
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

const searchCollectionMusicList = async ctx => {
  const user_id = await Cookie.getRedisClient(ctx)
  await userModel.searchCollectionMusicList(user_id)
    .then(result => {
      const res = result
      if (res[0]) {
        ctx.body = {
          code: 200,
          msg: '成功',
          data: [...res]
        }
      } else {
        ctx.body = {
          code: 200,
          msg: '你还没有收藏歌曲噢'
        }
      }
    })
}

const searchMusicById = async ctx => {
  const { music_id } = ctx.request.body
  await userModel.searchMusicById(music_id)
    .then(result => {
      const res = result
      if (res[0]) {
        ctx.body = {
          code: 200,
          msg: '成功',
          data: [...res]
        }
      } else {
        ctx.body = {
          code: 200,
          msg: '没有找到这首歌噢～'
        }
      }
    })
}

const cancelMusicCollection = async ctx => {
  const user_id = await Cookie.getRedisClient(ctx)
  const { music_id } = ctx.request.body
  await userModel.cancelMusicCollection({user_id, music_id})
    .then(async result => {
      const res = result
      if (res['affectedRows'] === 1) {
        await userModel.searchCollectionMusicList(user_id)
          .then(result => {
            const res = result
            if (res[0]) {
              ctx.body = {
                code: 200,
                data: [...res]
              }
            } else {
              ctx.body = {
                code: 4,
                msg: '收藏夹空了'
              }
            }
          })
          .catch(err => {
            ctx.body = {
              code:500,
              msg: '服务器炸了～'
            }
          })
      } else {
        ctx.body = {
          code: 500,
          msg: '不知道发生了什么'
        }
      }
    })
    .catch(err => {
      ctx.body = {
        code: 500,
        msg: '服务器炸了～'
      }
    }) 
}

const changeNickName = async ctx => {
  const user_id = Cookie.getRedisClient(ctx)
  const { newNickName } = ctx.request.body
  await userModel.changeNickName({user_id, newNickName})
    .then(async result => {
      console.log(result)
    })  
}

export {
  searchMusic,
  musicCollection,
  searchAuthor,
  addMusic,
  searchCollectionMusicList,
  searchMusicById,
  cancelMusicCollection,
  changeNickName
}