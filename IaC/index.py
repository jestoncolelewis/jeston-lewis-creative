import boto3

ses = boto3.client('sesv2')

def lambda_handler(event, context):
    replyto = event['body']['email']
    print(replyto)
    subject = event['body']['subject']
    print(subject)
    message = 'Name: ' + event['body']['name'] + '\n' + 'Phone: ' + event['body']['phone'] + '\n' + 'Message: ' + event['body']['message']
    print(message)
    response = ses.send_email(
        FromEmailAddress = 'web@jeston.click',
        FromEmailAddressIdentityArn = 'arn:aws:ses:us-west-2:706391136734:identity/jeston.click',
        Destination = {'ToAddresses': ['jeston@jeston.click']},
        ReplyToAddresses = [replyto],
        Content = {
            'Simple': {
                'Subject': {'Data': subject},
                'Body': {'Text': {'Data': message}}
            }
        }
    )
    return response
    