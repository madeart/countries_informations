import React from 'react'

function Logo() {
    return (
      <div className="logo">
        {/* balise img comme si j'etais dans /public pour le src */}
        <img
          src="../img/logo192.png"
          alt="logo react"
        />
        <h3>React World</h3>
      </div>
    );
}

export default Logo
