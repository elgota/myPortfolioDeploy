import React from "react";

export default function MyModal({visible, onClose}) {

    if (!visible) {
        return null;
    }

  return (
    <div className="fixed inset-0 
    bg-hardBlue 
    backdrop-blur-sm
    bg-opacity-30
    flex
    justify-center
    items-center">
        <div className="bg-lightBlue p-1 rounded text-center">
        <h1 className="font-ubuntu font-light mb-1 text-2xl text-grey px-3 py-3">Proximamente...</h1>
        <button onClick={onClose}
        className="font-ubuntu font-light text-hardBlue hover:underline py-2">Cerrar</button>
        </div>
        
        
        
    </div>
  )
}
