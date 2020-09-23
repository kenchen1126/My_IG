import { Controller } from "stimulus"
import Rails from "@rails/ujs"
export default class extends Controller {
  
  static targets = ["likebtn"]

  like_or_not(){
    const post_id = this.likebtnTarget.dataset.id
    const submitData = {post_id: post_id}
    Rails.ajax({
      url: `likes/like`, 
      type: 'POST', 
      dataType: 'json',
      beforeSend(xhr, options) {
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
        options.data = JSON.stringify(submitData)
        return true
      },
      success: resp => {
      }, 
      error: err => {
      } 
    })  
    if(Object.values(this.likebtnTarget.classList).includes("active")){
      this.likebtnTarget.classList.remove("active")
    }else{
      this.likebtnTarget.classList.add("active")  
    }
  }
}