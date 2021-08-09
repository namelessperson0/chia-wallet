      // FOR GETTING BALANCE FROM 3RD PART GRAPH API
      var query = ` query txns_aggregate($address: String) {
        balance: txns_aggregate(where: {to: {_eq: $address}, spent: {_eq: false}}) {
        ...txnSum
        __typename
        }
        }
        
        fragment txnSum on txns_aggregate {
        aggregate {
        sum {
        amount
        __typename
        }
        __typename
        }
        __typename
        } `;
           async function balance3rdP(address) {
        
            const apiO = await fetch('https://api.xchscan.com/v1/graphql', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
              },
              body: JSON.stringify({
                query,
                variables: { address: address },
              })
            })
            var apiJ = await apiO.json()
            balance = Number(apiJ.data.balance.aggregate.sum.amount) / 1000000000000;
            console.log(balance);
            return balance
          }

        //   export balance3rdP;