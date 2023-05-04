const banqueItems = {
    "fields":[
        {
            "name": "firstName",
            "label": "First Name",
            "type": "text",
            "required": true
          },
          {
            "name": "lastName",
            "label": "Last Name",
            "type": "text",
            "required": true
          },
          {
            "name": "email",
            "label": "Email",
            "type": "email",
            "required": true
          }
    ]
}


function AdminAjouterBanque(){
    return(
        <div className="">
            {/*Section Infos/Image Banque*/}
            <div className="flex flex-col">
                {/*INFOS*/}
                <div>
                <FormGenerator schema={banqueItems} />
                </div>
                {/*LOGO*/}
                <div>

                </div>
            </div>
        </div>
    )
}

export default AdminAjouterBanque;