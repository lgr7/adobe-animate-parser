import AnimateNode from './AnimateNode'

export default class AnimateNodeReference extends AnimateNode {
  constructor (id, nodeId, targetCache) {
    super (id, 'reference', undefined, {
      nodeId: nodeId
    })

    this.targetCache = targetCache
  }

  get nodeId () {
    return this.data.nodeId
  }

  get node () {
    return this.targetCache.parsed[this.nodeId]
  }
}
