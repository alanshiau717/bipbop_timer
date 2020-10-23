class Timer {
  constructor(ms) {
    this.remaining = ms
    this.total_duration = ms
    this.last_time = Date.now()
    this.next = false
    this.stopped = false
  }
  getTotal(){
    return this.total_duration
  }
  //returns remaining time in seconds
  getRemaining() {
    this.update_remaining()
    if (this.remaining<=0){
      this.next = true
    }
    return this.remaining/1000
  }

  update_remaining(){
    if(this.stopped == false){
      this.remaining = this.remaining - (Date.now()-this.last_time)
      this.last_time = Date.now()
    }
  }
  pause() {
    this.stopped = true
    this.last_time = Date.now()
  }
  play() {
    this.stopped = false
    this.last_time = Date.now()
  }
  stop() {
    this.stopped = true
    this.remaining = this.total_duration
    this.last_time = Date.now()
  }
}