import boto3
import json

ses = boto3.client('sesv2')

def lambda_handler(event, context):
    replyto = event.get('email')
    subject = event.get('subject')
    message = event.get('message')
    if event.get('routeKey') == 'GET /items':
        ses.send_email(
            FromEmailAddress = 'web@jeston.click',
            FromAddressIdentityArn = 'arn:aws:ses:us-west-2:706391136734:identity/web@jeston.click',
            Destination = {'ToAddresses': 'jeston@jeston.click'},
            ReplyToAddresses = replyto,
            Content = {
                'Simple': {
                    'Subject': {'Data': subject},
                    'Body': {'Text': message}
                }
            }
        )
    return event
    