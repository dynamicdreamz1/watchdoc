import React,{useState} from 'react'
import CliniciansRequestsTable from '../Clinician/CliniciansRequestsTable'
import CriticalPatientsAlertTableTabs from '../Clinician/CriticalPatientsAlertTableTabs'

export default function AdminDashboard() {

  const [clinicianStaff]=useState([
    {
        "id": 1,
        "email": "info@neighbourhoodmedical.com.au",
        "email_verified_at": null,
        "t&c": 0,
        "profile_created": 0,
        "contact_number": null,
        "mobile_num_verify": 0,
        "is_active": 0,
        "verification_code": 1691,
        "terra_user_id": null,
        "created_at": "2023-02-27T06:09:21.000000Z",
        "updated_at": "2023-02-27T06:09:21.000000Z",
        "meta_data": [
            {
                "id": 6,
                "meta_key": "full_name",
                "meta_value": "Dr Randerson Michael"
            }, 
            {
                "id": 8,
                "meta_key": "zip",
                "meta_value": "395002"
            },
            {
                "id": 201,
                "meta_key": "image",
                "meta_value": "https://this-person-does-not-exist.com/img/avatar-114078b498ae9cf56d36202949653ae7.jpg"
            },
            {
                "id": 209,
                "meta_key": "address",
                "meta_value": "594 Rafe Lane , Southaven , Mississippi."
            }
        ]
    },
    {
        "id": 2,
        "email": "reception@lincolnmedical.com.au",
        "email_verified_at": null,
        "t&c": 0,
        "profile_created": 0,
        "contact_number": null,
        "mobile_num_verify": 0,
        "is_active": 0,
        "verification_code": 1691,
        "terra_user_id": null,
        "created_at": "2023-02-27T06:09:21.000000Z",
        "updated_at": "2023-02-27T06:09:21.000000Z",
        "meta_data": [
            {
                "id": 6,
                "meta_key": "full_name",
                "meta_value": "Dr johnson"
            },
            {
                "id": 8,
                "meta_key": "zip",
                "meta_value": "395002"
            },
            {
                "id": 201,
                "meta_key": "image",
                "meta_value": "https://this-person-does-not-exist.com/img/avatar-114078b498ae9cf56d36202949653ae7.jpg"
            },
            {
                "id": 209,
                "meta_key": "address",
                "meta_value": "594 Rafe Lane , Southaven , Mississippi."
            }
        ]
    },
    {
        "id": 3,
        "email": "beth@ochremedical.com",
        "email_verified_at": null,
        "t&c": 0,
        "profile_created": 0,
        "contact_number": null,
        "mobile_num_verify": 0,
        "is_active": 0,
        "verification_code": 1691,
        "terra_user_id": null,
        "created_at": "2023-02-27T06:09:21.000000Z",
        "updated_at": "2023-02-27T06:09:21.000000Z",
        "meta_data": [
            {
                "id": 6,
                "meta_key": "full_name",
                "meta_value": "Dr loosy"
            },
            {
                "id": 8,
                "meta_key": "zip",
                "meta_value": "395002"
            },
            {
                "id": 201,
                "meta_key": "image",
                "meta_value": "https://this-person-does-not-exist.com/img/avatar-114078b498ae9cf56d36202949653ae7.jpg"
            },
            {
                "id": 209,
                "meta_key": "address",
                "meta_value": "594 Rafe Lane , Southaven , Mississippi."
            }
        ]
    },
    {
        "id": 4,
        "email": "drben@paragon.com",
        "email_verified_at": null,
        "t&c": 0,
        "profile_created": 0,
        "contact_number": null,
        "mobile_num_verify": 0,
        "is_active": 0,
        "verification_code": 1691,
        "terra_user_id": null,
        "created_at": "2023-02-27T06:09:21.000000Z",
        "updated_at": "2023-02-27T06:09:21.000000Z",
        "meta_data": [
            {
                "id": 6,
                "meta_key": "full_name",
                "meta_value": "Dr Georgia"
            },
            {
                "id": 8,
                "meta_key": "zip",
                "meta_value": "395002"
            },
            {
                "id": 201,
                "meta_key": "image",
                "meta_value": "https://this-person-does-not-exist.com/img/avatar-114078b498ae9cf56d36202949653ae7.jpg"
            },
            {
                "id": 209,
                "meta_key": "address",
                "meta_value": "594 Rafe Lane , Southaven , Mississippi."
            }
        ]
    },
    {
        "id": 5,
        "email": "info@walker.com.au",
        "email_verified_at": null,
        "t&c": 0,
        "profile_created": 0,
        "contact_number": null,
        "mobile_num_verify": 0,
        "is_active": 0,
        "verification_code": 1691,
        "terra_user_id": null,
        "created_at": "2023-02-27T06:09:21.000000Z",
        "updated_at": "2023-02-27T06:09:21.000000Z",
        "meta_data": [
            {
                "id": 6,
                "meta_key": "full_name",
                "meta_value": "Dr Perry"
            },
            {
                "id": 8,
                "meta_key": "zip",
                "meta_value": "395002"
            },
            {
                "id": 201,
                "meta_key": "image",
                "meta_value": "https://this-person-does-not-exist.com/img/avatar-114078b498ae9cf56d36202949653ae7.jpg"
            },
            {
                "id": 209,
                "meta_key": "address",
                "meta_value": "594 Rafe Lane , Southaven , Mississippi."
            }
        ]
    },
    {
        "id": 6,
        "email": "reception@lincolnmedical.com.au",
        "email_verified_at": null,
        "t&c": 0,
        "profile_created": 0,
        "contact_number": null,
        "mobile_num_verify": 0,
        "is_active": 0,
        "verification_code": 1691,
        "terra_user_id": null,
        "created_at": "2023-02-27T06:09:21.000000Z",
        "updated_at": "2023-02-27T06:09:21.000000Z",
        "meta_data": [
            {
                "id": 6,
                "meta_key": "full_name",
                "meta_value": "Dr johnson"
            },
            {
                "id": 8,
                "meta_key": "zip",
                "meta_value": "395002"
            },
            {
                "id": 201,
                "meta_key": "image",
                "meta_value": "https://this-person-does-not-exist.com/img/avatar-114078b498ae9cf56d36202949653ae7.jpg"
            },
            {
                "id": 209,
                "meta_key": "address",
                "meta_value": "594 Rafe Lane , Southaven , Mississippi."
            }
        ]
    },
    {
        "id": 7,
        "email": "info@walker.com.au",
        "email_verified_at": null,
        "t&c": 0,
        "profile_created": 0,
        "contact_number": null,
        "mobile_num_verify": 0,
        "is_active": 0,
        "verification_code": 1691,
        "terra_user_id": null,
        "created_at": "2023-02-27T06:09:21.000000Z",
        "updated_at": "2023-02-27T06:09:21.000000Z",
        "meta_data": [
            {
                "id": 6,
                "meta_key": "full_name",
                "meta_value": "Dr Randerson Michael"
            },
            {
                "id": 8,
                "meta_key": "zip",
                "meta_value": "395002"
            },
            {
                "id": 201,
                "meta_key": "image",
                "meta_value": "https://this-person-does-not-exist.com/img/avatar-114078b498ae9cf56d36202949653ae7.jpg"
            },
            {
                "id": 209,
                "meta_key": "address",
                "meta_value": "594 Rafe Lane , Southaven , Mississippi."
            }
        ]
    },
    {
        "id": 8,
        "email": "drarpit@gmail.com",
        "email_verified_at": null,
        "t&c": 0,
        "profile_created": 0,
        "contact_number": null,
        "mobile_num_verify": 0,
        "is_active": 0,
        "verification_code": 1691,
        "terra_user_id": null,
        "created_at": "2023-02-27T06:09:21.000000Z",
        "updated_at": "2023-02-27T06:09:21.000000Z",
        "meta_data": [
            {
                "id": 6,
                "meta_key": "full_name",
                "meta_value": "Dr loosy"
            },
            {
                "id": 8,
                "meta_key": "zip",
                "meta_value": "395002"
            },
            {
                "id": 201,
                "meta_key": "image",
                "meta_value": "https://this-person-does-not-exist.com/img/avatar-114078b498ae9cf56d36202949653ae7.jpg"
            },
            {
                "id": 209,
                "meta_key": "address",
                "meta_value": "594 Rafe Lane , Southaven , Mississippi."
            }
        ]
    },
    {
        "id": 9,
        "email": "reception@lincolnmedical.com.au",
        "email_verified_at": null,
        "t&c": 0,
        "profile_created": 0,
        "contact_number": null,
        "mobile_num_verify": 0,
        "is_active": 0,
        "verification_code": 1691,
        "terra_user_id": null,
        "created_at": "2023-02-27T06:09:21.000000Z",
        "updated_at": "2023-02-27T06:09:21.000000Z",
        "meta_data": [
            {
                "id": 6,
                "meta_key": "full_name",
                "meta_value": "Dr Georgia"
            },
            {
                "id": 8,
                "meta_key": "zip",
                "meta_value": "395002"
            },
            {
                "id": 201,
                "meta_key": "image",
                "meta_value": "https://this-person-does-not-exist.com/img/avatar-114078b498ae9cf56d36202949653ae7.jpg"
            },
            {
                "id": 209,
                "meta_key": "address",
                "meta_value": "594 Rafe Lane , Southaven , Mississippi."
            }
        ]
    },
    {
        "id": 10,
        "email": "beth@ochremedical.com",
        "email_verified_at": null,
        "t&c": 0,
        "profile_created": 0,
        "contact_number": null,
        "mobile_num_verify": 0,
        "is_active": 0,
        "verification_code": 1691,
        "terra_user_id": null,
        "created_at": "2023-02-27T06:09:21.000000Z",
        "updated_at": "2023-02-27T06:09:21.000000Z",
        "meta_data": [
            {
                "id": 6,
                "meta_key": "full_name",
                "meta_value": "Dr Perry"
            },
            {
                "id": 8,
                "meta_key": "zip",
                "meta_value": "395002"
            },
            {
                "id": 201,
                "meta_key": "image",
                "meta_value": "https://this-person-does-not-exist.com/img/avatar-114078b498ae9cf56d36202949653ae7.jpg"
            },
            {
                "id": 209,
                "meta_key": "address",
                "meta_value": "594 Rafe Lane , Southaven , Mississippi."
            }
        ]
    },
    {
        "id": 11,
        "email": "drarpit@gmail.com",
        "email_verified_at": null,
        "t&c": 0,
        "profile_created": 0,
        "contact_number": null,
        "mobile_num_verify": 0,
        "is_active": 0,
        "verification_code": 1691,
        "terra_user_id": null,
        "created_at": "2023-02-27T06:09:21.000000Z",
        "updated_at": "2023-02-27T06:09:21.000000Z",
        "meta_data": [
            {
                "id": 6,
                "meta_key": "full_name",
                "meta_value": "Dr arpit"
            },
            {
                "id": 8,
                "meta_key": "zip",
                "meta_value": "395002"
            },
            {
                "id": 201,
                "meta_key": "image",
                "meta_value": "https://this-person-does-not-exist.com/img/avatar-114078b498ae9cf56d36202949653ae7.jpg"
            },
            {
                "id": 209,
                "meta_key": "address",
                "meta_value": "594 Rafe Lane , Southaven , Mississippi."
            }
        ]
    },
    {
        "id": 12,
        "email": "drjevin@gmail.com",
        "email_verified_at": "2023-03-24T10:55:51.000000Z",
        "t&c": 0,
        "profile_created": 0,
        "contact_number": "54544556565",
        "mobile_num_verify": 0,
        "is_active": 1,
        "verification_code": 953963,
        "terra_user_id": null,
        "created_at": "2023-02-28T00:05:29.000000Z",
        "updated_at": "2023-03-24T10:55:51.000000Z",
       
        "meta_data": [
            {
                "id": 11,
                "meta_key": "full_name",
                "meta_value": "Dr jevin"
            },
            {
                "id": 13,
                "meta_key": "zip",
                "meta_value": "1234"
            },
            {
                "id": 207,
                "meta_key": "image",
                "meta_value": "https://this-person-does-not-exist.com/img/avatar-119faca67dffe07e00541b8ebebc92d4.jpg"
            },
            {
                "id": 211,
                "meta_key": "address",
                "meta_value": "2548 Stuart Street , Bridgeville ,Pennsylvania."
            }
        ]
    }
])
  return (
    <>
        <CriticalPatientsAlertTableTabs/>
        <CliniciansRequestsTable clinicianStaff={clinicianStaff}/>
    </>
  )
}
