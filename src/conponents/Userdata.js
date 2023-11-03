import React from 'react'

const Userdata = ({userdata, deleteUser, getSingleUser }) => {
  return (
    
<div class="relative w-full overflow-x-auto shadow-md sm:rounded-lg flex justify-center">
    <table class="w-9/12 text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    First Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Last Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Role
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            
            { userdata?.data?.map((users)=>(
          <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={users._id}>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {users.firstname}
                </th>
                <td class="px-6 py-4">
                {users.lastname}
                </td>
                <td class="px-6 py-4">
                {users.email}
                </td>
                <td class="px-6 py-4">
                {users.role}
                </td>
                <td class="px-6 py-4">
                  <button className='hover:text-red-500' onClick={() => deleteUser(users._id)}>Delete</button> <span> - </span>
                  <button className='hover:text-blue-500' onClick={() => getSingleUser(users._id)}>Edit</button>
                </td>
                   
            </tr>
            ))
          } 
        </tbody>
    </table>
</div>

  )
}

export default Userdata