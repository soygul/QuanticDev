from manim import *


def highlight_line(code: Code, line_from, line_to):
    if not line_to:
        line_to = line_from
    lines = range(line_from, line_to)

    return [ApplyMethod(code.code[line_no].set_opacity, 1 if line_no in lines else .3) for line_no in range(len(code.code))]


def create_code(code_src: str, ext: str = 'py', scale_factor: float = .7):
    file = f'code.{ext}'
    with open(file, 'w') as f:
        f.write(code_src.replace("""
""", """ 
"""))  # hack: not to get newlines trimmed by LaTex renderer, we replace '\n' with '\n '

    code = Code(file, scale_factor=scale_factor)

    with open(file, 'w') as f:
        f.write('')

    return code


# https://docs.manim.community/en/stable/reference.html
class AnimatedCode(Scene):
    config['pixel_height'] = 2160
    config['pixel_width'] = 3840

    def animation_template(self):
        code = create_code("""xxxxxx""")
        self.clear()
        self.play(ShowCreation(code, run_time=10))
        self.wait(5)

        self.play(*highlight_line(code, 2, 6))
        self.wait(5)

        code2 = create_code("""xxxxxx""")
        self.play(Transform(code, code2, run_time=2))
        self.wait(5)

    def construct(self):
        code = create_code("""db.connect('postgresql://localhost/testdb')
db.initialize()

user = db.create_new_user('John Doe', 'john.doe@quanticdev.com')
user.give_permission('create_blog_post')

post = user.new_blog_post('Test Blog Post Title', 'Lorem ipsum dolor sit amet...')
post.upload_thumbnail('./test_thumbnail.jpg')
post.publish()""")
        self.play(ShowCreation(code, run_time=10))
        self.wait(5)

        code2 = create_code("""db.connect('postgresql://localhost/testdb') \\
    .initialize() \\
    .create_new_user('John Doe', 'john.doe@quanticdev.com') \\
    .give_permission('create_blog_post') \\
    .new_blog_post('Test Blog Post Title', 'Lorem ipsum dolor sit amet...') \\
    .upload_thumbnail('./test_thumbnail.jpg') \\
    .publish()""")
        self.play(Transform(code, code2, run_time=2))
        self.wait(5)

        self.clear()

        code = create_code("""db.connect('postgresql://localhost/testdb')
db.initialize()""")
        self.play(ShowCreation(code, run_time=5))
        self.wait(5)

        code2 = create_code("""db.connect('postgresql://localhost/testdb').initialize()""")
        self.play(Transform(code, code2, run_time=2))
        self.wait(5)

        code3 = create_code("""db.connect('postgresql://localhost/testdb') \\
    .initialize() \\
    .close()""")
        self.play(Transform(code2, code3, run_time=2))
        self.wait(5)

        self.clear()

        code = create_code("""class DB:
    def connect(self, url):
        pass

    def initialize(self):
        pass

    def close(self):
        pass""")
        self.play(ShowCreation(code, run_time=10))
        self.wait(5)

        code2 = create_code("""class DB:
    def connect(self, url):
        # todo
        return self

    def initialize(self):
        # todo
        return self

    def close(self):
        # todo
        return self""")
        self.play(Transform(code, code2, run_time=2))
        self.wait(5)

        self.clear()

        code = create_code("""db.connect('postgresql://localhost/testdb')
log.info('Initializing the database.')
db.initialize()""")
        self.play(ShowCreation(code, run_time=10))
        self.wait(5)

        self.clear()

        code2 = create_code("""db.connect('postgresql://localhost/testdb') \\
    .log_info('Initializing the database.') \\
    .initialize()""")
        self.play(Transform(code, code2, run_time=2))
        self.wait(5)

        code = create_code("""subscribers
  .filter(p => p.liked_the_video === true)
  .sort(p => p.name)
  .pat_on_the_back()""", ext='js')
        self.play(ShowCreation(code, run_time=10))
        self.wait(5)
