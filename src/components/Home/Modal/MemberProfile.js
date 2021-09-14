import React from 'react'

function MemberProfile() {
    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    {/* <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div> */}
                    <div class="modal-body text-center">
                        <img
                            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                            alt=""
                            className="img-fluid" />
                        <h1>Musaif Ahnaf</h1>
                        <div className="d-flex justify-content-center align-items.mt-3items-center">
                            <i class="fab fa-facebook memberSocialLink"></i>
                            <i class="fab fa-instagram memberSocialLink"></i>
                            <i class="fab fa-twitter memberSocialLink"></i>
                            <i class="fas fa-globe memberSocialLink"></i>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <div type="button" class="text-danger fs-3" data-bs-dismiss="modal">
                            <i class="far fa-times-circle"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemberProfile
