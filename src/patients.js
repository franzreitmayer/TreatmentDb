function Patients () {
    return function () {
        const ALL_PATIENTS = [
            {id: 1, firstName: "Max", lastName: "Mustermann", dateOfBirth: "1977-04-01"},
            {id: 2, firstName: "Max", lastName: "Mustermann", dateOfBirth: "1980-07-10"},
            {id: 3, firstName: "Sabine", lastName: "Musterfrau", dateOfBirth: "1976-01-23"},
            {id: 4, firstName: "Karl", lastName: "Spiegelhauer", dateOfBirth: "2003-09-30"}
        ];

        const _insertPatient = (patient) => {
            ALL_PATIENTS.push(patient);
        }

        const _getAllPatients = () => {
            return [...ALL_PATIENTS];
        }

        const filterPatients = (firstName, lastName) => {
            if (firstName == "*" || lastName == "*") return _getAllPatients();
            const PATIENTS = _getAllPatients();

            
        }

    }();
}