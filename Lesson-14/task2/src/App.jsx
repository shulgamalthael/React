import React from 'react';

const App = () => {
    return(
            <div class="page">
                <div class="page__content">
                    <h1>Users</h1>
                    <ul class="navigation">
                        <li class="navigation__item">
                            <a href="/users/github">Github</a>
                        </li>
                        <li class="navigation__item">
                            <a href="/users/facebook">Facebook</a>
                        </li>
                    </ul>

                    <User />
                        <div class="user">
                            <img alt="User Avatar" src="https://avatars1.githubusercontent.com/u/9919?v=4" class="user__avatar">
                            <div class="user__info">
                                <span class="user__name">GitHub</span>
                                <span class="user__location">San Francisco,CA</span>
                            </div>
                        </div>

                </div>
            </div>
    )
}

export default App;