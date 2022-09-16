import Image from 'next/image'
import dummyImage from '../public/profilePicture.jpeg'
// import projects from '../projects.js';




const ProjectCard = ({ posts }) => {
  console.log(posts)
  return (
    // <>
    //   <table>
    //     <tr>
    //       <th>Header One</th>
    //       <th>Header Two</th>
    //       <th>Header Three</th>
    //     </tr>
    //     <tr>
    //       <td>Content 1</td>
    //       <td>Content 2</td>
    //       <td>Content 3</td>
    //     </tr>
    //     <tr>
    //       <td>Content 4</td>
    //       <td>Content 5</td>
    //       <td>Content 6</td>
    //     </tr>
    //     <tr>
    //       <td>Content 7</td>
    //       <td>Content 8</td>
    //       <td>Content 9</td>
    //     </tr>
    //   </table>
    // </>
    <section>
      <Image 
      alt="Project Card"
      src={dummyImage} 
      width={200}
      height={200}
      />
      <div>
        <h2></h2>
      </div>
    </section>
  );
};

export async function getStaticProps() {
  const res = await fetch('../projects.js')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}

export default ProjectCard;
