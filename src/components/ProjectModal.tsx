export default function ProjectModal({project,close}:any){

return(

<div className="fixed inset-0 flex justify-center items-center bg-black/70">

<div className="bg-gray-900 p-8 rounded-xl max-w-md">

<h2 className="text-2xl text-cyan-400">
{project.title}
</h2>

<p className="mt-4 text-gray-400">
{project.desc}
</p>

<button
onClick={close}
className="mt-6 px-4 py-2 bg-cyan-500 rounded"
>
Close
</button>

</div>

</div>

)
}