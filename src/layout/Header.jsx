import React from 'react'

function Header() {
  return (
    <div>
            <div className="dark container">
                <header className="d-flex justify-content-center py-3">
                <ul class="nav nav-pills">
                    <li class="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
                    <li class="nav-item"><a href="#" className="nav-link">Features</a></li>
                    <li class="nav-item"><a href="#" className="nav-link">Pricing</a></li>
                    <li class="nav-item"><a href="#" className="nav-link">FAQs</a></li>
                    <li class="nav-item"><a href="#" className="nav-link">About</a></li>
                </ul>
                </header>
        </div>
    </div>
  )
}

export default Header