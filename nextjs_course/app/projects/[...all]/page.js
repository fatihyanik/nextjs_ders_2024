'use client'

const Project = ({ params }) => {
    //console.log(params);
    return (
        <div>
            <h1>Project {params.all}</h1>
            <br />
            {params.all.map((p) => (
                <li key={p}>{p}</li>
            ))}
        </div>
    )
}

export default Project