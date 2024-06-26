export default function TodoInfo(){
    return(
        <div>
            <p className="itens-left">Itens Left</p>

            <ul className="filter"> 
                <li><button>All</button></li>
                <li><button>Active</button></li>
                <li><button>Completed</button></li>
            </ul>

            <button>Clear Complete</button>
        </div>
    )
}