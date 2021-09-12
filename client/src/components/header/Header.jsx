import "./header.css"

export default function Header() {
    return (
        <div className="header">
              <div className="headerTitles">
                <span className="headerTitleSm"> Fitness & Diet </span>
                <span className="headerTitleLg"> Fitness blog</span>
            </div>
            <img src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" className="headerImg" />
        </div>
    )
}
