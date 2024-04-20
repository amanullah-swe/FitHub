import React from 'react'
import { courses3 } from '../assets/images'

function Blog() {
    return (
        <div className='w-full  h-[100dvh] bg-[#ffff] pb-20 '>
            <div className="blog-card max-w-[800px] m-auto">
                <div className="wrapper">
                    <time className="publish-date" dateTime="2022-02-24">
                        <span className="span">24</span> Feb
                    </time>
                    <div>
                        <div className="card-author">
                            <a href="#" className="card-link">
                                By: <span className="span">Maddie Rife</span>
                            </a>
                        </div>
                        <ul className="card-meta-list">
                            <li className="card-meta-item">
                                <p className="item-text">87 Likes</p>
                            </li>
                            <li className="card-meta-item">
                                <p className="item-text">58 Share</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <h3 className="h3">
                    <a href="#" className="card-title">It was popularised sheets the release contain</a>
                </h3>
                <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing el tempora quasi hic assumenda? Ea, sequi velit. Ipsa in id quas reprehenderit, ipsam cumque natus totam ea minima, quisquam numquam adipisci est.
                </p>
            </div>
            <div className='m-auto max-w-[800px] '>
                <img src={courses3} className='w-[400px] mr-8 mb-8 float-left ' />

                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ullam, quia sequi laborum fugiat voluptatibus consequatur a rem repellat nisi repellendus placeat mollitia enim impedit, quae, voluptas sapiente ex voluptatem.
                    Blanditiis nulla ad itaque ipsa saepe incidunt dolorum, fugit, officiis explicabo, magnam id dolores perspiciatis. Eveniet tenetur error nesciunt exercitationem rerum doloribus illo, mollitia ea expedita. Deleniti quis quod placeat.
                    Ex quia cupiditate numquam delectus dignissimos soluta obcaecati neque facilis inventore excepturi iure veniam cumque vero ea porro expedita ab, quam labore eius quaerat voluptatibus odio necessitatibus. Corrupti, consequatur corporis.
                    Ducimus, accusamus neque, quae sint reprehenderit, dignissimos officia in deleniti vero amet nostrum quam recusandae necessitatibus enim sapiente nisi sit pariatur! Voluptas mollitia alias aut velit commodi illo, provident odio.
                    Provident odio non, assumenda impedit eos dolores suscipit molestias quo necessitatibus rerum iure rem incidunt iusto voluptatibus expedita alias nihil nostrum! Aut, officiis fuga esse commodi ducimus error inventore ea!
                    Repellat hic debitis aspernatur ipsa ipsum harum assumenda fugiat sapiente ea quod laudantium architecto odit vitae aliquid voluptatum sunt error, provident tempore totam quasi, excepturi nostrum deserunt possimus mollitia. Corrupti.
                    Eveniet quae harum nisi atque! Perferendis, repudiandae deserunt non veritatis nobis repellat optio, amet dignissimos sunt error iure commodi blanditiis perspiciatis illum aliquid. Iusto, laudantium rerum. Minima adipisci maxime optio.
                    ndis, repellat deleniti nisi? At alias nam culpa nesciunt omnis vero amet accusantium ratione nihil fugiat libero numquam distinctio ipsum architecto accusamus, autem illo impedit saepe tenetur?
                    Porro exercitationem consequatur vero deserunt placeat unde beatae delectus autem esse nesciunt fuga, sed fugiat nisi et. Tempore, voluptates autem hic suscipit adipisci, cupiditate ex omnis doloribus in pariatur nam.
                    Mollitia debitis obcaecati pariatur culpa. Consequuntur, inventore. Itaque, tempora. Fuga, nostrum, itaque perspiciatis quaerat inventore asperiores necessitatibus repellendus voluptatum officiis, eaque tenetur maxime ipsam soluta saepe unde adipisci aspernatur rem.
                    Obcaecati esse sed aliquam repudiandae! Sit aliquam necessitatibus fugiat optio libero animi, pariatur, omnis nam eligendi velit, in consectetur assumenda quo nobis hic cupiditate accusantium cumque ipsam modi mollitia! Nisi.
                    Voluptas voluptate eveniet doloremque! Ullam animi necessitatibus, optio, error neque soluta ipsa laboriosam sapiente accusamus est fugiat adipisci officiis eveniet modi quis dolor a inventore explicabo labore! Perspiciatis, sunt aperiam!</p>
            </div>
        </div>
    )
}

export default Blog