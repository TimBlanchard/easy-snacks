export const getSchoolsFromApiAsync = async () => {
    try {
        let response = await fetch(
            'http://51.103.32.77/schools/',
            {
                "method": "GET",
                "accept": "application/json",
            }
        );
        let json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}

export const getSchoolDetails = async (id) => {
    if(!id) {
        return;
    }
    try {
        let response = await fetch(
            'http://51.103.32.77/school/'+id,
            {
                "method": "GET"
            }
        );
        let json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}

export const getSchoolMachines = async (id) => {
    if(!id) {
        return;
    }
    try {
        let response = await fetch(
            'http://51.103.32.77/school/'+id+'/vendingMachines',
            {
                "method": "GET"
            }
        );
        let json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}

export const randomNumberInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}