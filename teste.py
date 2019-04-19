from instapy import InstaPy
from instapy import smart_run

insta_username = ''
insta_password = ''

# get a session!
session = InstaPy(username=insta_username,
                  password=insta_password,
                  headless_browser=True,
                  multi_logs=True)

like_tag_list = ['rio', 'viagem', 'empreender', 'calor', 'marketing']
# let's go! :>
with smart_run(session):
    # general settings
    session.set_relationship_bounds(enabled=True,
                                    potency_ratio=None,
                                    delimit_by_numbers=True,
                                    max_followers=60000,
                                    max_following=30000,
                                    min_followers=30,
                                    min_following=30)
    session.set_user_interact(amount=2, randomize=True, percentage=30,
                              media='Photo')
    session.set_do_like(enabled=True, percentage=100)
    session.set_do_follow(enabled=True, percentage=30)
    # unfollow activity
    session.unfollow_users(amount=10, nonFollowers=True, style="RANDOM",
                           unfollow_after=42 * 60 * 60, sleep_delay=300)
    session.like_by_tags(random.sample(like_tag_list, 3),amount=random.randint(50, 100), interact=True)
    session.join_pods()
